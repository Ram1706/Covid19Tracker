export const getStateWiseDetails = allStateDetails => {
  const totalStateDetails = JSON.parse(JSON.stringify(allStateDetails));
  const confirmdDetails = totalStateDetails.filter(
    totalStateDetail => totalStateDetail.status === 'Confirmed',
  );
  const datelabels = [];
  const selectedStateDetails = [];
  confirmdDetails.forEach(confirmdDetail => {
    datelabels.push(confirmdDetail.date);
    selectedStateDetails.push(confirmdDetail.tn);
  });

  const stateDetails = {
    labels: datelabels,
    datasets: [
      {
        data: selectedStateDetails,
        strokeWidth: 2, // optional
      },
    ],
  };
  return stateDetails;
};
