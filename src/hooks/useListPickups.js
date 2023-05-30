import { useQuery, gql } from '@apollo/client';
import * as gqlb from "gql-query-builder"


const body = gqlb.query({
    operation: "listPickups",
    fields: [{
        data: ["id", "code", "date", "timeFrom", "timeTo", "shipmentsCount", "notes"]
    }],
    variables: {}
})

const GET_LIST = gql`${body.query}`

export const useLists = () => {
    const { error, data, loading } = useQuery(GET_LIST);
    return {
        error,
        data,
        loading
    }
}