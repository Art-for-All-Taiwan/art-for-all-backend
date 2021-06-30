module.exports = {
  client: {
      service: {
          name: 'biodb',
          url: 'https://biodb-dev-hasura.herokuapp.com/v1/graphql',
          headers: {
              "X-Hasura-Admin-Secret": "biodb"
          },
      }
  },
};