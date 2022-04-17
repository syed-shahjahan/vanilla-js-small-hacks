import "./styles.css";

var SEPARATOR = "/";

document.getElementById(
  "app"
).innerHTML = `<h1 class="text-center">Branch Name Builder</h1>
<div id="callout"></div>
<div id="form-container"></div>
`;

var branchNameBuilderForm = `
<form class="builder-form" action="#">
    <label for="branch_type">
        Type:
    </label>
    <select id="branch_type">
        <option value="feature">Feature</option>
        <option value="bugfix">Bug Fix</option>
    </select>

    <label for="jira_ticket">
        JIRA Ticket ID
    </label>
    <input id="jira_ticket" />
    <label for="jira_ticket_title">
        JIRA Ticket Title
    </label>
    <input id="jira_ticket_title" />

    <button type="submit" id="form-submit" class="button">Save to clipboard</button>
</form>`;

function formatString(str) {
  return str
    .trim()
    .replace(/[^a-zA-Z]/g, "-")
    .toLowerCase();
}

function SelfCopy(copyText) {
  navigator.clipboard.writeText(copyText);
}

document.getElementById("form-container").innerHTML = branchNameBuilderForm;

document.getElementById("form-submit").addEventListener("click", function () {
  // feature/<ticket_ID>_<ticket_title>
  var branchType = document.getElementById("branch_type").value;
  var ticketID = document.getElementById("jira_ticket").value.toLowerCase();
  var ticketTitle = formatString(
    document.getElementById("jira_ticket_title").value
  );
  var copyText = ""
    .concat(branchType)
    .concat(SEPARATOR)
    .concat(ticketID, "-")
    .concat(ticketTitle);
  document.getElementById("callout").innerHTML = copyText;
  SelfCopy(copyText);
});
