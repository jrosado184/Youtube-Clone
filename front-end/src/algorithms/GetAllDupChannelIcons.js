export const getAllDupChannelIcons = (res, duplicateChannel) => {
  for (let i = 0; i < duplicateChannel.length; i++) {
    const duplicateChannelIndex = res.data.items
      .map((dup) => dup?.id)
      .indexOf(duplicateChannel[i]);
    res.data.items.push(res.data.items[duplicateChannelIndex]);
  }
  res.data.items.sort((a, b) =>
    a?.snippet?.title.localeCompare(b?.snippet?.title)
  );
};
