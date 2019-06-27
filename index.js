const driver = {};

function updateDriverWithKeyAndValue(obj, k, v) {
  const newDriver = { ...obj };
  newDriver[k] = v;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, k, v) {
  obj[k] = v;
  return obj;
}

function deleteFromDriverByKey(obj, k) {
  const newDriver = { ...obj };
  delete newDriver[k];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, k) {
  delete obj[k];
  return obj;
}
