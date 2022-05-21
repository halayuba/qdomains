<template>
  <q-page padding>
    <q-markup-table class="bg-purple-8" style="max-width: 500px"
      dark
      wrap-cells
    >
      <thead>
        <tr>
          <th colspan="100%">
            <q-img src="https://picsum.photos/200/50" />
          </th>
        </tr>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Hala Yuba</td>
          <td>halayuba@email.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Shako Mako</td>
          <td>shakomako@email.com</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
