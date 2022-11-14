import { gql } from "apollo-angular";

export const GET_CHILDREN = gql`
query GetChildren($id: uuid) {
  learner(where: {user_id: {_eq: $id}}) {
    name
    surname
    learnerSchool: learner_schools(where: {status: {_eq: "current_study"}}) {
      grade
      level
      school {
        id
        name
      }
    }
    location {
      streetName: street_name
      suburb
      city
      postalCode: postal_code
    }
  }
  school(where: {deleted_at: {_is_null: true}}) {
    id
    name
    level: school_level
  }
}`;

  export const INSERT_CHILD = gql`
  mutation InsertChild($child: learner_insert_input!) {
    insert_learner_one(object: $child) {
      id
    }
  }`;
  