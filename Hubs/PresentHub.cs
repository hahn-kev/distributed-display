using System.Threading.Tasks;
using distributed_display.Entities;
using Microsoft.AspNetCore.SignalR;

namespace distributed_display.Hubs
{
    public class PresentHub : Hub
    {
        private static SlideEvent lastEvent;

        public Task SendSlideEvent(SlideEvent @event)
        {
            lastEvent = @event;
            return Clients.All.SendAsync("slideEvent", @event);
        }

        public override Task OnConnectedAsync()
        {
            if (lastEvent != null)
                Clients.Caller.SendAsync("slideEvent", lastEvent);
            return base.OnConnectedAsync();
        }
    }
}