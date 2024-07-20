"use server"

export const sendEmailServerAction = async (FormData: FormData) => {
    console.log(FormData.get("user name"));
    console.log(FormData.get("email"));
    console.log(FormData.get("message"));
}