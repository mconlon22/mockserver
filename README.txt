To run docker container 

docker build --tag node-docker .

sudo docker run --publish 8080:8080 node-docker


Endpoints
These now all require authentication with the node sever described https://github.com/mconlon22/jwt

178.62.61.92:8080/Authenticate
decision:AU01   USE    firstname=SIMON      surname=SMITH
decision:AU02   USE    firstname=TOM      surname=SMITH
decision:NA00   USE    firstname=JOHN      surname=SMITH
decision:U001   USE    firstname=MARTIN      surname=SMITH
default:AU01
178.62.61.92:8080/BankWizard
178.62.61.92:8080/Peps
