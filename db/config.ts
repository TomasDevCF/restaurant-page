import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config

const Reservas = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    email: column.text(),
    people: column.number(),
    hour: column.text(),
    date: column.text()
  }
})

const Categorias = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    name: column.text()
  }
})

const Menu = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    name: column.text(),
    price: column.number(),
    category_id: column.text({references: () => Categorias.columns.id}),
    ingredientes: column.text()
  }
})

export default defineDb({
  tables: { Reservas, Menu, Categorias }
});
