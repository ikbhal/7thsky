#install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash	
sudo apt-get install git; #install git
npm install forever -g
mkdir ~/git;
cd ~/git
git clone https://github.com/ikbhal/7thsky.git
cd ~/git/7thsky;
npm install #build the 7thsky
forever start server.js


