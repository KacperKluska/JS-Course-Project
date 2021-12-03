export const filters = [
  { name: 'Pattern' },
  { name: 'Color' },
  { name: 'Figure' },
  { name: 'Type' },
  { name: 'Category' },
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
