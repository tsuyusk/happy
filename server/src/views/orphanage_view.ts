import Orphanage from '../models/Orphanage';
import images_view from './images_view';

export default {
  render(orphanage: Orphanage) {
    const { images, ...renderedOrphanage } = orphanage;

    return {
      ...renderedOrphanage,
      images: images_view.renderMany(images),
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.render(orphanage));
  },
};
