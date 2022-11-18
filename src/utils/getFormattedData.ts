const getFormattedData = (data: any) => {
  if (data?.data?.length) {
    return data.data.map((restaurant: any) => {
      const {
        name,
        address,
        cloudinaryImageId,
        sla,
        costForTwoString,
        cuisines,
        avgRating,
        totalRatings
      } = restaurant.data.data;
      return {
        name,
        address,
        cloudinaryImageId,
        sla: {
          maxDeliveryTime: sla.maxDeliveryTime
        },
        costForTwoString,
        cuisines,
        avgRating,
        totalRatings
      };
    });
  }

  return [];
};

export default getFormattedData;
