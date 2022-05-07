const request = {
  tags: ['Monuments'],
  summary: 'Get monument by id',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
      },
    },
  },
};

const getMonumentByIdSchema = {
  ...request,
};

export default getMonumentByIdSchema;
