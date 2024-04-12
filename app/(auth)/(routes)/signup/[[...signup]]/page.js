import { SignUp } from "@clerk/nextjs";
 
const SignUpPage = () => (
  <section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <div className="fill-white">
      
        <svg width="100px" height="31px" viewBox="0 0 1022.142 316.863">
      	<path d="M1022.142,188.294c0-5.015-4.559-10.03-10.03-10.03c-12.31,0-17.325,29.635-49.695,29.635
      		c-4.103,0-8.662-0.456-12.31-2.28c1.823-10.03,3.647-20.06,3.647-30.546c0-8.662-1.824-25.075-13.678-25.075
      		c-15.501,0-22.796,31.002-22.796,42.856c0,7.751,1.368,15.957,5.927,22.34c-5.015,8.206-15.045,19.604-25.531,19.604
      		c-14.589,0-21.428-19.149-21.428-31.003c0-15.045,9.574-27.811,9.574-43.312c0-7.295-2.736-15.501-11.398-15.501
      		c-20.516,0-21.884,34.65-23.252,48.783c-1.368,12.31-26.443,41.033-39.209,41.033c-4.559,0-5.927-8.662-5.927-12.31
      		c0-22.34,25.987-63.828,25.987-68.388c0-7.295-7.295-12.766-14.134-12.766c-24.164,0-37.841,66.564-37.841,85.257
      		c0,19.149,11.398,30.546,30.546,30.546c17.781,0,33.282-13.678,44.68-25.987c6.839,15.957,21.884,27.355,39.209,27.355
      		c20.516,0,36.018-14.133,46.504-30.546c5.927,1.824,12.31,2.735,18.693,2.735c23.252,0,51.519-15.501,61.093-37.385
      		C1021.686,191.485,1022.142,190.118,1022.142,188.294 M728.999,213.369c-8.662,14.133-25.987,28.723-42.856,28.723
      		c-19.149,0-30.547-17.325-30.547-35.106c0-26.899,20.061-46.048,46.504-47.416c-1.368,3.191-1.824,7.295-1.824,10.942
      		C700.277,189.206,713.954,203.795,728.999,213.369 M737.662,186.014c0,2.736,0,5.015-0.456,7.751
      		c-8.206-5.471-16.413-14.133-16.413-24.164c0-2.28,0-7.295,3.191-7.295C731.735,162.307,737.662,179.632,737.662,186.014
      		 M808.329,188.294c0-5.015-4.103-9.118-9.118-9.118c-9.118,0-15.501,20.516-39.209,20.516c0.912-4.103,1.368-7.751,1.368-11.854
      		c0-15.501-9.574-42.856-28.723-42.4c-4.559-7.295-18.693-7.295-26.443-7.295c-38.297,0-76.594,30.091-76.594,70.211
      		c0,29.635,21.884,54.254,51.975,54.254c27.355,0,57.446-17.781,70.211-41.944C770.032,222.944,808.329,210.178,808.329,188.294
      		 M503.32,34.65c0,32.826-40.121,92.095-59.725,117.171c4.103-31.002,19.148-104.405,44.68-124.921
      		c2.28-1.824,4.559-3.647,7.751-3.647C501.952,23.252,503.32,30.091,503.32,34.65 M606.358,51.063
      		c0,29.635-23.708,76.138-39.209,100.758c0.912-28.267,8.662-91.639,31.002-112.156c0.912-0.456,2.28-1.368,3.191-1.368
      		C606.358,38.297,606.358,49.239,606.358,51.063 M508.791,247.563c0,15.045-7.751,45.592-27.355,45.592
      		c-35.106,0-41.488-45.136-42.856-71.579c15.501,5.015,30.546,8.207,46.959,8.207c6.839,0,13.222-0.456,20.061-1.368
      		C507.879,234.342,508.791,241.18,508.791,247.563 M495.57,207.442c-3.647,0.912-7.295,0.912-10.486,0.912
      		c-15.045,0-36.017-3.647-48.327-12.766c0.456-6.383,11.854-5.927,16.413-5.927C468.215,189.662,485.083,196.045,495.57,207.442
      		 M652.861,189.206c0-5.471-2.279-9.574-8.662-9.574c-15.045,0-17.781,51.063-46.959,51.063c-18.237,0-25.987-29.634-28.723-43.312
      		c27.811-34.65,59.725-95.287,59.725-140.879c0-14.589-7.295-33.738-24.62-33.738c-43.312,0-60.637,124.466-60.637,157.748
      		c0,5.471,0,10.942,0.456,15.957c-6.839,6.383-14.59,12.31-23.252,15.957c-13.222-19.604-35.106-33.282-58.813-35.561
      		c22.796-31.458,64.284-92.095,64.284-132.672C525.66,15.957,516.998,0,496.937,0c-51.063,0-74.315,131.304-77.506,170.513
      		c-9.118,3.647-16.869,10.486-16.869,20.972c0,8.662,6.383,15.957,13.221,20.516c0.456,38.753,5.927,104.861,58.358,104.861
      		c36.929,0,57.446-38.297,57.446-71.123c0-7.751-1.368-15.501-3.192-22.796c6.839-3.191,13.222-6.839,19.149-11.398
      		c5.927,21.428,20.516,42.856,45.136,42.856C622.315,254.402,652.861,217.017,652.861,189.206 M368.369,149.541
      		c0,12.31-15.045,25.987-27.355,25.987c-1.824,0-3.647-0.456-5.471-0.912c1.368-12.31,10.486-36.474,26.443-36.474
      		C366.089,138.143,368.369,146.35,368.369,149.541 M436.756,186.926c0-5.471-4.103-10.03-9.574-10.03
      		c-4.559,0-5.471,1.368-8.206,5.015c-13.678,18.237-30.091,39.665-55.622,39.665c-14.133,0-23.708-8.662-26.899-22.34
      		c26.899-0.912,54.254-27.811,54.254-55.166c0-15.501-9.118-27.355-25.075-27.355c-34.194,0-54.71,42.4-54.71,72.491
      		c0,29.179,18.237,56.534,49.695,56.534c30.091,0,62.005-27.811,74.77-53.798C436.3,190.574,436.756,188.75,436.756,186.926
      		 M283.125,51.063c0,29.635-23.708,76.138-39.209,100.758c0.912-28.267,8.662-91.639,31.002-112.156
      		c1.368-0.912,2.736-1.824,4.103-2.28C282.669,41.033,283.125,46.048,283.125,51.063 M330.084,190.118
      		c0-5.927-2.736-10.486-9.118-10.486c-15.501,0-19.604,51.063-46.96,51.063c-18.237,0-25.987-30.091-28.723-43.312
      		c28.267-36.017,59.725-94.831,59.725-140.879c0-14.589-7.295-33.738-24.62-33.738c-43.312,0-60.637,124.466-60.637,157.748
      		c0,31.914,8.662,83.889,49.695,83.889C299.082,254.402,330.084,217.017,330.084,190.118 M165.498,127.201
      		c14.133,0,24.163-13.677,24.163-26.899c0-9.118-5.015-19.149-15.501-19.149c-15.957,0-23.708,19.149-23.708,32.37
      		C150.453,122.186,157.291,127.201,165.498,127.201 M85.712,26.899c2.28-1.824,4.559-3.647,7.751-3.647
      		c5.927,0,7.295,6.839,7.295,11.398c0,32.826-40.121,92.095-59.725,117.171C45.136,120.818,60.181,47.416,85.712,26.899
      		 M78.874,293.155c-35.106,0-41.488-45.136-42.856-71.579c15.501,5.015,30.546,8.207,46.959,8.207
      		c6.839,0,13.222-0.456,20.061-1.368c2.28,5.927,3.191,12.766,3.191,19.149C106.229,262.608,98.478,293.155,78.874,293.155
      		 M86.168,209.266c-18.237,0.912-37.841-3.647-53.798-12.766c0-1.824,0-3.647-0.456-5.471c3.191-1.824,11.398-1.824,15.045-1.824
      		c17.325,0,36.017,7.295,47.416,20.06H86.168z M231.606,177.352c-4.559,0-7.751,3.191-10.03,6.383
      		c-8.207,13.222-26.899,48.327-45.592,48.327c-11.398,0-11.398-12.31-11.398-20.516c0-19.604,8.662-43.312,8.662-56.534
      		c0-6.383-4.103-11.854-10.942-11.854c-16.869,0-18.237,29.635-19.604,41.488c-6.839,7.295-15.501,14.133-25.075,17.781
      		c-13.222-19.604-35.106-33.282-58.813-35.561c22.796-31.458,64.284-92.095,64.284-132.672C123.098,15.957,114.435,0,94.375,0
      		C43.312,0,20.06,131.304,16.869,170.513C7.751,174.161,0,180.999,0,191.485c0,8.662,6.383,15.957,13.222,20.516
      		c0.456,38.753,5.927,104.861,58.358,104.861c36.929,0,57.446-38.297,57.446-71.123c0-7.751-1.368-15.501-3.191-22.796
      		c5.015-2.28,10.03-5.015,14.59-8.207c0.456,20.061,7.295,40.577,30.546,40.577c24.164,0,70.211-44.68,70.211-68.388
      		C241.18,181.455,237.077,177.352,231.606,177.352"></path>
      </svg>
        </div>

        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to FileFlow
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
          One stop destination for file sharing.
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="#"
          >
            <span className="sr-only">Home</span>
            <svg
              className="h-8 sm:h-10"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Squid 🦑
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
            quibusdam aperiam voluptatum.
          </p>
        </div>

       <SignUp  />
      </div>
    </main>
  </div>
</section>
);
export default SignUpPage;