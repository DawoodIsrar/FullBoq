import * as Yup from "yup"

export const addProjectSchema=Yup.object({
    name: Yup.string().required('Please Enter Project Name'),
    area: Yup.string().required('Please Enter Area'),
    no_of_roofs: Yup.string().required('Please Enter no of Roofs'),
    rooms:Yup.string().required("Please Enter No of Rooms "),
    avg_room_size:Yup.string().required("Room Size Required"),
    attach_bath_size:Yup.string().required("Bathroom Size Required"),
    kitchen_size:Yup.string().required("Kitchen  Size Required"),
    ratio:Yup.string().required("Ratio  Required")

});
