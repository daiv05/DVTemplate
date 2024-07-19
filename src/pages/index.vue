<template>
  <div>
    <span>CAAAATTTTSSSSS<br /><br /></span>
    <span v-for="dat in cats">- {{ dat.text }} <br /><br /></span>
    <span>ANIMAAAAALLSSSS<br /><br /></span>
    <span>- {{ animals.text }} <br /><br /></span>
  </div>
</template>

<script setup>
const cats = ref([])
const animals = ref([])
const alertToast = inject('alertToast')
const loadCats = async () => {
  const { data, error } = await catServices.getCatAllData()
  if (data) {
    cats.value = data
    alertToast({
      title: 'Cats loaded',
      text: 'Cats loaded successfully!'
    })
  }
  if (error) {
    console.log('Error: ', error)
  }
}
const loadAnimals = async () => {
  const { data, error } = await catServices.getAnimals()
  if (data) {
    animals.value = data
    alertToast({
      title: 'Animals loaded',
      text: 'Animals loaded successfully!'
    })
  }
  if (error) {
    console.log('Error: ', error)
  }
}

// await Promise.all([loadCats(), loadAnimals()])
</script>
