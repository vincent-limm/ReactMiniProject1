export const httpHelper = () => {
  const url = 'https://mitramas-test.herokuapp.com';
  const customFetch = async (path, options = {}) => {
    console.log({ options });
    const defaultMethod = 'GET';
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || defaultMethod;
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => {
      controller.abort();
    }, 3000);

    try {
      const response = await fetch(url + path, options);
      return await response.json();
    } catch (err) {
      return err;
    }
  };

  const get = (path, options = {}) => customFetch(path, options);

  const post = (path, options) => {
    options.method = 'POST';
    return customFetch(path, options);
  };

  const put = (path, options) => {
    options.method = 'PUT';
    return customFetch(path, options);
  };

  const del = (path, options) => {
    options.method = 'DELETE';
    return customFetch(path, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
