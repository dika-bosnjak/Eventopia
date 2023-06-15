export default function ActivityDetailsChat() {
  return (
    <>
      <div className="md:mr-4 block bg-white border border-gray-200 rounded-lg shadow">
        <div className="bg-blue-500 w-full rounded-t-md p-3 text-white mb-4 text-center font-bold">
          Chat about this event
        </div>

        <div className="grid grid-cols-12 px-4 relative mt-4">
          <div className="col-span-1">
            <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
          </div>
          <div className="col-span-8 mt-2">
            <p className="text-gray-500 font-bold">
              Bob |
              <span className="text-sm font-semibold">Today, 05:30 PM</span>
            </p>
            <p className="text-gray-700">Message</p>
          </div>
        </div>

        <div className="grid grid-cols-12 px-4 relative mt-4">
          <div className="col-span-1">
            <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
          </div>
          <div className="col-span-8 mt-2">
            <p className="text-gray-500 font-bold">
              Anna |
              <span className="text-sm font-semibold">Today, 06:12 PM</span>
            </p>
            <p className="text-gray-700">Message</p>
          </div>
        </div>

        <div>
          <form>
            <div className="mx-4 my-4">
              <div className="px-4 py-2 border border-gray-200 p-4 rounded-lg">
                <textarea
                  id="comment"
                  rows={10}
                  className="w-full text-sm text-gray-900 bg-white focus:ring-0 border-0 active:border-0"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-end px-3 py-2 ">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                >
                  Reply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
