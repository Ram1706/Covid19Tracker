export const getStateWiseDetails = allStateDetails => {
  const totalStateDetails = JSON.parse(JSON.stringify(allStateDetails));
  const confirmdDetails = totalStateDetails.filter(
    totalStateDetail => totalStateDetail.status === 'Confirmed',
  );
  let datelabels = [];
  let selectedStateDetails = [];
  confirmdDetails.forEach(confirmdDetail => {
    datelabels.push(confirmdDetail.date);
    selectedStateDetails.push(confirmdDetail.tn);
  });

  datelabels = datelabels.slice(Math.max(datelabels.length - 7, 0));
  selectedStateDetails = selectedStateDetails.slice(
    Math.max(selectedStateDetails.length - 7, 0),
  );

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

export const getTotalCaseDetails = (districtData, type) => {
  let totalCases = 0;
  districtData &&
    districtData.forEach(districtInfo => {
      if (type === 'Confirmed') {
        totalCases = totalCases + districtInfo.confirmed;
      } else if (type === 'Recovered') {
        totalCases = totalCases + districtInfo.recovered;
      } else if (type === 'Deceased') {
        totalCases = totalCases + districtInfo.deceased;
      } else if (type === 'Active') {
        totalCases = totalCases + districtInfo.active;
      }
    });
  return numberWithCommas(totalCases);
};

export const getDailyTotalCaseDetails = (districtData, type) => {
  let totalCases = 0;
  districtData &&
    districtData.forEach(districtInfo => {
      if (type === 'Confirmed') {
        totalCases = totalCases + districtInfo.delta.confirmed;
      } else if (type === 'Recovered') {
        totalCases = totalCases + districtInfo.delta.recovered;
      } else if (type === 'Deceased') {
        totalCases = totalCases + districtInfo.delta.deceased;
      }
    });
  return numberWithCommas(totalCases);
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
