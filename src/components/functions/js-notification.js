import {notify} from "@kyvg/vue3-notification";

export const showNotification = (messageTitle = '', messageBody = '', type,
             time = 10000000000) => {
    const text = `
        ${messageBody}
      `
    notify({
        // group,
        type: `${type}`,
        title: `${messageTitle}`,
        text,
        duration: time,
        data: {

        }
    })
}