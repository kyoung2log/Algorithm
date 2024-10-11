function solution(emergency) {
  const sortedEmergency = [...emergency].sort((a, b) => b - a);
  const answer = emergency.map((item) => {
    return sortedEmergency.indexOf(item) + 1;
  });

  return answer;
}
