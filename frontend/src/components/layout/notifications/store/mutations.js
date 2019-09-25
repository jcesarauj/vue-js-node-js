const PUSH = (state, notification) => {
    state.queue.push(notification)

    if (state.queue.length > state.max) {
        state.queue.shift()
    }
}

export default {
    PUSH
}