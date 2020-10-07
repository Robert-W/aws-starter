FROM node:12

# Build Arguments
ENV TERRAFORM_VERSION=0.13.3

# Install dependencies
RUN apt-get -q update && \
    apt-get -qy dist-upgrade && \
    apt-get clean && \
		# Install dependencies
		apt-get -q install -y wget unzip && \
    # Install AWS CLI V2
    cd /tmp && \
    wget -O awscli.zip https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip && \
    unzip awscli.zip && \
    bash aws/install && \
    rm -rf awscli.zip aws /usr/local/aws-cli/v2/*/dist/awscli/data/ac.index /usr/local/aws-cli/v2/*/dist/awscli/examples &&\
		# Install Terraform
		cd /usr/local/bin && \
		wget -O terraform.zip https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip && \
    unzip terraform.zip && \
    rm terraform.zip

# Set the working directory for the root user
WORKDIR /root

# Default command
CMD ["/bin/bash"]
