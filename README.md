<div align="center">

<a href="https://github.com/Avendaosander/AE-Social">
   <img alt="Universidad Valle del Momboy" src="https://res.cloudinary.com/dtjgc9qlk/image/upload/v1686783373/Logos/AE_Social_igs83x.jpg" width="200" />
</a>

# **AE Social**

🟣Este es el servidor oficial la aplicacion de Tweets **AE Social**, desarrollado con GraphQL y Apollo-Server🟣

[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759279/Eventos%20UVM/Nodejs_f1rqqz.webp)](https://nodejs.org/docs/latest-v19.x/api/)
[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/w_150/v1686780701/Logos/GraphQL_hm0rd8.png)](https://graphql.org/code/#javascript)
[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/w_150/v1686780782/Logos/Apollo-server_w3akvq.png)](https://www.apollographql.com/docs/apollo-server/)
[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759279/Eventos%20UVM/MongoDB_r13ajm.png)](https://www.mongodb.com/docs/manual/)
</div>


## **Tabla de Contenidos** 📌
***
- [**AE Social**](#ae-social)
  - [**Tabla de Contenidos** 📌](#tabla-de-contenidos-)
  - [**Instalación** 🔧](#instalación-)
  - [**Ejecutando las pruebas** ⚙️](#ejecutando-las-pruebas-️)
    - [**Querys**](#querys)
      - [⚛️**GetTweets**](#️gettweets)
      - [⚛️**GetTweetsFav**](#️gettweetsfav)
    - [**Mutations**](#mutations)
      - [⚛️**CreateTweet**](#️createtweet)
      - [✏️**UpdateTweet**](#️updatetweet)
      - [🗑️**DeleteTweet**](#️deletetweet)
  - [**Construido con** 🛠️](#construido-con-️)
  - [**Desarrolladores** ✒️](#desarrolladores-️)


## **Instalación** 🔧
***
Debe crear un archivo `.env` en la ruta raiz del proyecto `/`. El contenido de este archivo `.env` le será enviado.
***
Una vez creado el archivo `.env`, abrir la terminal en la ruta raiz del proyecto y ejecutar el siguiente comando:
```
npm install
```
Iniciar el servidor ejecutando el comando:
```
npm run dev
```
Debe aparecer lo siguiente:
```
🚀 Server listening at: http://localhost:4000/
DB Conectada🚀
```
Significa que el servidor ha arrancado correctamente.

## **Ejecutando las pruebas** ⚙️
***
Iniciar el servidor desde la ruta raiz del proyecto "/", una vez inciado el servidor puede ir a la siguiente ruta para utilizar la API:
```
http://localhost:4000/
```

### **Querys**
***

#### ⚛️**GetTweets** 
Puede probar el Modelo usando GraphQL Playground (Query)

Esta query mostrará todo los tweets disponibles.
```
{
  tweets {
    _id,
    username,
    message,
    like,
    fav
  }
}
```
#### ⚛️**GetTweetsFav** 
Puede probar el Modelo usando GraphQL Playground (Query)

Esta query mostrará todo los tweets favoritos disponibles.
```
{
  tweets {
    _id,
    username,
    message,
    like,
    fav
  }
}
```
### **Mutations**
***

#### ⚛️**CreateTweet** 
Puede probar el Modelo usando GraphQL Playground (Mutation)

Esta mutacion crea un Tweet.

```
mutation {
  createTweet (
    username: "Front II",
    message: "Realizando API con GraphQL y Apollo-server"
  ) {
    _id,
    username,
    message,
    like,
    fav
  }
}
```

#### ✏️**UpdateTweet** 
Puede probar el Modelo usando GraphQL Playground (Mutation)

Esta mutacion modifica la propiedad fav o like de un Tweet.

```
mutation {
  updateTweet(
    _id: "6488b5abda657f9bdf99d1b8",
    fav: true
  ){
    _id,
    username,
    message,
    like,
    fav
  }
}
```

#### 🗑️**DeleteTweet** 
Puede probar el Modelo usando GraphQL Playground (Mutation)

Esta mutacion elimina un Tweet.

```
mutation {
  deleteTweet (_id: "6488b463fc359425e20e8ca8"){
    _id,
    username,
    message,
    like,
    fav
  }
}
```

## **Construido con** 🛠️

* [NodeJs](https://nodejs.org/dist/latest-v19.x/docs/api/)  19.8.1
* [GraphQL](https://graphql.org/code/#javascript)  16.6.0
* [Apollo-server](https://www.apollographql.com/docs/apollo-server/) 4.7.3
* [MongoDB](https://www.mongodb.com/docs/)  6.0.4
* [Mongoose](https://mongoosejs.com/docs/)  7.2.4

## **Desarrolladores** ✒️

* **Alexander Avendaño** - *Desarrollador* - [Avendaosander](https://github.com/Avendaosander)
* **Eutimio Briceño** - *Desarrollador* - [Alejo2608](https://github.com/Alejo2608)