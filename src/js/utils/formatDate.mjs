export default function formatDate(postCreated) {
  const postDate = new Date(postCreated);
  const now = new Date();
  const diffMs = now - postDate;

  const diffSec = diffMs / 1000;
  const diffMin = diffSec / 60;
  const diffHrs = diffMin / 60;
  const diffDays = diffHrs / 24;

  if (diffMin < 60) {
    return `${Math.floor(diffMin)} minutes ago`;
  } else if (diffHrs < 24) {
    return `${Math.floor(diffHrs)} hours ago`;
  } else if (diffDays < 7) {
    return `${Math.floor(diffDays)} days ago`;
  } else {
    const year = postDate.getFullYear();
    let month = postDate.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    const day = postDate.getDate();
    return `${day}/${month}/${year}`;
  }
}
