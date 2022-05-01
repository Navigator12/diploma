const request = {
  tags: ['People'],
  summary: 'Create person',
  body: {
    type: 'object',
    additionalProperties: false,
    required: ['name'],
    properties: {
      name: {
        type: 'string',
        minLength: 1,
      },
      description: {
        type: 'string',
      },
      photo_id: {
        type: 'string',
        format: 'uuid',
      },
    },
  },
};

const createMonumentSchema = {
  ...request,
};

export default createMonumentSchema;
