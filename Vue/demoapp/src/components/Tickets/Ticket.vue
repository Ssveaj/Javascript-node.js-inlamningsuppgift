<template>
<tr>
    <td class="pl-0">
        <div v-bind:class="iconColor(ticket.name)" class="icon-rounded-md">
            <h4 class="font-weight-medium">{{addInitials(ticket)}}</h4>
        </div>
    </td>
    <td>
        <p class="mb-0">{{ticket.name}}</p>
        <p class="text-muted mb-0">{{ticket.city}}</p>
    </td>
    <td>
        <p class="mb-0">{{addDate(ticket)}}</p>
        <p class="text-muted mb-0">{{addTime(ticket)}}</p>
    </td>
    <td>
        <p class="mb-0">{{ticket.project}}</p>
        <p class="text-muted mb-0">{{ticket.other}}</p>
    </td>
    <td class="pr-0">
        <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
    </td>
</tr>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    ticket: Object
  },
  methods: {
        addInitials: (ticket) => {
            let names = ticket.name.split(" ");
            let initials = names[0][0] + names[1][0]; 
            return initials;
        },
          addDate: (ticket) => {
            let dateTime = ticket.date.split(",");
            let date = dateTime[0];
            return date;
        },
          addTime: (ticket) => {
            let dateTime = ticket.date.split(",");
            let time = dateTime[1];
            return time;
        },
        iconColor: (icon) => {
         switch (icon) {
            case "Alta Lucas":
             return "icon-rounded-primary";
            case "Teresa Shaw":
             return "icon-rounded-info";
            case "Rosa Underwood":
             return "icon-rounded-danger";
            case "Vilson Rowa":
             return "icon-rounded-warning";
            default:
             return "icon-rounded-success";
      }
    }
  }
}
</script>

