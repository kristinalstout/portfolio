import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "platform for social media",
      type: "string",
    },
    {
      name: "url",
      title: "url",
      type: "url",
    },
  ],

})
