export const filters = [
  { name: 'Category' },
  { name: 'Type' },
  { name: 'Pattern' },
  { name: 'Color' },
  { name: 'Figure' },
];

export const handleFilterValue = (setFiltersValues, key, newValue) => {
  setFiltersValues((prev) => ({
    ...prev,
    [key.toLowerCase()]: newValue === 'None' ? null : newValue,
  }));
};

export const handleListShow = (
  setSelectedFilter,
  selectedFilter,
  newFilter,
) => {
  if (
    Object.keys(selectedFilter).length === 0 ||
    newFilter.name !== selectedFilter.name
  )
    setSelectedFilter(newFilter);
  else setSelectedFilter({});
};
