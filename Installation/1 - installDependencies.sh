## Mise à jour des librairies OS
sudo apt-get update &&

## Installation des Virtual Box Guest Additions (full screen, copier coller etc...)

sudo apt install build-essential dkms linux-headers-$(uname -r) &&
cd /media/username/VBox_GA_* &&
./autorun.sh

## Installation de VS Code
    ### Installation des dépendances
    sudo apt-get install wget gpg -y &&
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg  &&
    sudo install -D -o root -g root -m 644 packages.microsoft.gpg  /etc/apt/keyrings/packages.microsoft.gpg &&
    sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list' &&
    rm -f packages.microsoft.gpg &&
    sudo apt install apt-transport-https -y &&
    sudo apt update -y &&
    ### Installation de VS Code
    sudo apt install code -y &&
## Installation de Docker
    sudo apt-get install curl &&
    curl -fsSL https://get.docker.com -o get-docker.sh &&
    sudo sh get-docker.sh &&
    sudo usermod -a -G docker $USER &&

### Installation de Docker compose
sudo apt-get install docker-compose-plugin -y &&

### Installation de DBeaver
sudo apt update -y &&
sudo apt -y install default-jdk &&
curl -fsSL https://dbeaver.io/debs/dbeaver.gpg.key | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/dbeaver.gpg &&
echo "deb https://dbeaver.io/debs/dbeaver-ce /" | sudo tee /etc/apt/sources.list.d/dbeaver.list &&
sudo apt update -y &&
sudo apt install dbeaver-ce -y

### Fin de l'installation des dépendances et outils systèmes
