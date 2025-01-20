import { useNotification } from '@kyvg/vue3-notification'

const { notify } = useNotification()

const alertToast = (config) => {
  notify({
    ...config,
    ignoreDuplicates: true
  })
}

export default {
  alertToast
}
