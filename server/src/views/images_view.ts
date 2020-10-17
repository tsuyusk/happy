import Image from '../models/Image';

export default {
  render(image: Image) {
    const { path, ...renderedOrphanage } = image;

    return {
      ...renderedOrphanage,
      url: `http://${process.env.API_URL || 'localhost'}:3333/uploads/${path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map(images => this.render(images));
  },
};
