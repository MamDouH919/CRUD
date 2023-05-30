import { gql, useQuery } from '@apollo/client';
import * as gqlb from "gql-query-builder"


const body = gqlb.query({
    operation: "pickup",
    fields: ["id", "code", "date", "timeFrom", "timeTo", "shipmentsCount", "notes",
        {
            customer: ["id", "name"]
        }
    ],
    variables: {
        id: {
            type: "Int",
            required: true
        }
    }
})

const GET_ONE_pickup = gql`${body.query}`

export const useOneList = (id) => {
    const { error, data, loading } = useQuery(GET_ONE_pickup, {
        variables: {
            id,
        }
    })

    return {
        error,
        data,
        loading
    }
}