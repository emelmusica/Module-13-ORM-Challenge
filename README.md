# E-commerce Back End Starter Code

# This challenge is to build the back end for an e-commerce site. I'll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

A mysql database and application backend for an e-commerce site. Built using MySQL2, Express, Sequelize and dotenv.

# User Story: 

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

- GIVEN a functional Express.js API


- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file


- THEN I am able to connect to a database using Sequelize


- WHEN I enter schema and seed commands


- THEN a development database is created and is seeded with test data


- WHEN I enter the command to invoke the application


- THEN my server is started and the Sequelize models are synced to the MySQL database


- WHEN I open API GET routes in Insomnia Core for categories, products, or tags


- THEN the data for each of these routes is displayed in a formatted JSON


- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core


- THEN I am able to successfully create, update, and delete data in my database

# installation

npm install mysql2

npm install sequelize

npm install dotenv

# Usage

Run the following command at the root of your project and answer the prompted questions:

mysql -u root -p

Enter PW when promted

source db/schema.sql

quit

npm run seed

npm start

Video walkthrough Link: 
https://www.youtube.com/watch?v=cJYaBWbXIWo&feature=youtu.be

Repository Link:
https://github.com/emelmusica/Module-13-ORM-Challenge.git
