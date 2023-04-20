export const getCreatedAtString = (value: Date) => {
  const todayDate = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((todayDate.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) {
    return '방금 전';
  }
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 8) {
    return `${betweenTimeDay}일 전`;
  }

  return `${value.getFullYear()}년 ${value.getMonth() + 1}월 ${value.getDate()}일`;
};
