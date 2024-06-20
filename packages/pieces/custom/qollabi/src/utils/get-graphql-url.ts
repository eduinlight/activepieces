export type GetGraphQLUrlParams ={
  clientName: string
  env: "uat" | "prd"
}

export function getGraphQLUrl({clientName, env}: GetGraphQLUrlParams): string{
  const envMapping = {
    uat: "io",
    prd: "app"
  }
  return `https://${clientName}.api.qollabi.${envMapping[env]}/graphql`
}
