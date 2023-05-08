import * as Yup from "yup"

export const addProjectSchema=Yup.object({
    window: Yup.string().required('Please choose a Window'),
    door: Yup.string().required('Please choose a Door'),
    sand: Yup.string().required('Please choose a Sand'),
    concrete: Yup.string().required('Please choose a Concrete'),
    blocks: Yup.string().required('Please choose a Door'),

});
