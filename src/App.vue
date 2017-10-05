<template>
  <div id="app">
    <router-view :people="people"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () { 
      return  {
        people: [
            {
              "index": 0,
              "id": "ebee55c4-d685-4d77-a2bb-650283fb8753",
              "picture": "http://placehold.it/32x32",
              "age": 20,
              "eyeColor": "green",
              "name": "Hope Dennis",
              "company": "ZORK",
              "email": "hopedennis@zork.com",
              "address": "127 Wortman Avenue, Corriganville, Marshall Islands, 5960",
              "about": "Labore velit deserunt sunt labore nisi reprehenderit voluptate consequat laboris id minim. Elit tempor occaecat sunt enim irure aliqua eiusmod minim. Ad culpa laborum laborum anim proident duis ullamco. Sit ipsum id esse proident sunt et dolor excepteur Lorem irure anim. Lorem nisi eiusmod pariatur qui duis sint minim dolore.\r\n"
            },
            {
              "index": 1,
              "id": "c54ac0fd-5288-45e3-afa4-fa30c84a6a68",
              "picture": "http://placehold.it/32x32",
              "age": 24,
              "eyeColor": "blue",
              "name": "Coleen Kidd",
              "company": "AFFLUEX",
              "email": "coleenkidd@affluex.com",
              "address": "138 Kane Place, Lowgap, Northern Mariana Islands, 5687",
              "about": "Nisi quis dolor commodo qui consequat nostrud adipisicing minim aliqua id incididunt aliquip voluptate mollit. Ullamco dolore occaecat cupidatat velit quis. Magna velit anim et irure laboris excepteur ullamco in esse qui culpa ipsum. Veniam fugiat labore duis fugiat cillum cupidatat labore tempor eu cupidatat. Mollit veniam Lorem commodo magna minim labore veniam cillum irure. Deserunt amet deserunt et culpa elit magna ullamco. Occaecat ex esse nostrud ullamco aliquip sint aliqua culpa est ipsum aliqua reprehenderit esse incididunt.\r\n"
            }, 
          ]
      }
        
    }
}
</script>
 