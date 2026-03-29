-Para executar o servidor utilizando Docker, certifique-se de ter o Docker instalado e em funcionamento na sua máquina. 

-Em seguida, acesse a pasta do projeto pelo terminal e utilize o comando docker compose up --build para construir a imagem e iniciar o container. 

-Caso prefira rodar o servidor em segundo plano, utilize docker compose up -d --build. Após a execução, o servidor estará disponível em http://localhost:3000. 

-Para parar a aplicação, utilize Ctrl + C (caso esteja rodando no terminal) ou o comando docker compose down para encerrar e remover os containers.
