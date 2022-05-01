const request = {
  tags: ['Monuments'],
  summary: 'Create monument',
  body: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'latitude', 'longitude'],
    properties: {
      name: {
        type: 'string',
        minLength: 1,
      },
      latitude: {
        type: 'number',
        min: -180,
        max: 180,
      },
      longitude: {
        type: 'number',
        min: -180,
        max: 180,
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
