function getTimeDifference(startTimestamp, endTimestamp) {
    const diff = Math.abs(endTimestamp - startTimestamp);
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24) % 365);
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(diff / (1000 * 60) % 60);
    const seconds = Math.floor(diff / 1000 % 60);

    let output = "";
    if (years > 0) output += `${years} year${years > 1 ? 's' : ''}`;
    if (days > 0 && years === 0) output += `${days} day${days > 1 ? 's' : ''}`;
    if (hours > 0 && days === 0 && years === 0) output += `${output.length > 0 ? ' and ' : ''}${hours} hour${hours > 1 ? 's' : ''}`;
    if (minutes > 0 && days === 0 && hours === 0 && years === 0) output += `${output.length > 0 ? ' and ' : ''}${minutes} minute${minutes > 1 ? 's' : ''}`;
    if (seconds > 0 && days === 0 && hours === 0 && minutes === 0 && years === 0) output += `${output.length > 0 ? ' and ' : ''}${seconds} second${seconds > 1 ? 's' : ''}`;

    return output.trim();
}

module.exports = getTimeDifference;