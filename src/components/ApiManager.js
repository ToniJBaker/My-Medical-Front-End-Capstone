
export const fetchUsers = (resource = "", options = {}) => {
    return fetch(`http://localhost:8088/users${resource}`, options)
    .then(response => response.json())
}

export const fetchPhysicians = (resource = "", options = {}) => {
  return fetch(`http://localhost:8088/physicians${resource}`, options)
  .then(response => response.json())
}
export const fetchAppointments = (resource = "", options = {}) => {
  return fetch(`http://localhost:8088/appointments${resource}`, options)
  .then(response => response.json())
}
export const fetchPrescriptions = (resource = "", options = {}) => {
  return fetch(`http://localhost:8088/prescriptions${resource}`, options)
  .then(response => response.json())
}
export const fetchProcedures = (resource = "", options = {}) => {
  return fetch(`http://localhost:8088/procedures${resource}`, options)
  .then(response => response.json())
}
export const fetchMedicalHistory = (resource = "", options = {}) => {
  return fetch(`http://localhost:8088/medicalHistory${resource}`, options)
  .then(response => response.json())
}




export const postOption = (bodyContent) => {

    const post = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyContent),
      }
    
  return post

}

export const getLoggedInUser = () => {
  return {...JSON.parse(localStorage.getItem("myMedical_user"))}
}


export const putOption = (bodyContent) => {

    const put = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyContent),
      }

    return put

  }

  export const deleteOption = () => {

    const deleteOpt = {
        method: "DELETE",
    }
    
    return deleteOpt
  }



