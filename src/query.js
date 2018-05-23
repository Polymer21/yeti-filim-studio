import gql from 'graphql-tag'


export const generateToken = gql `GenerateNodeToken($rootToken: String!, $serviceId: ID!, $nodeId: ID!) {
    generateNodeToken(input: {
      rootToken: $rootToken,
      serviceId: $serviceId,
      nodeId: $nodeId,
      modelName: "User",
      expirationInSeconds: 86400000000000000000000000000000000000000000, # 864000 seconds are 10 days (default is 30)
      clientMutationId: ""
    }) {
      token
    }
  }`