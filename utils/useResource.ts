export default <T>(resource: string) => {
  const resourceAll = useState<Array<T>>(`${resource}-all`, () => []);
  const resourceSingle = useState<T | null>(`${resource}-single`, () => null);
  const loadingAll = useState<boolean>(`${resource}-loading-all`, () => false);
  const loadingSingle = useState<boolean>(
    `${resource}-loading-single`,
    () => false
  );
  const errorAll = useState<string | null>(`${resource}-error-all`, () => null);
  const errorSingle = useState<string | null>(
    `${resource}-error-single`,
    () => null
  );

  const fetchAll = async () => {
    loadingAll.value = true;
    try {
      const response = await $fetch<Array<T>>(`/api/${resource}`);
      resourceAll.value = response;
    } catch (error) {
      if (error instanceof Error) {
        errorAll.value = error.message;
      } else {
        errorAll.value = "An error occurred";
      }
    } finally {
      loadingAll.value = false;
    }
  };

  const fetchSingle = async (id: number) => {
    loadingSingle.value = true;
    try {
      const response = await $fetch<T>(`/api/${resource}/${id}`);
      resourceSingle.value = response;
    } catch (error) {
      if (error instanceof Error) {
        errorSingle.value = error.message;
      } else {
        errorSingle.value = "An error occurred";
      }
    } finally {
      loadingSingle.value = false;
    }
  };

  const editSingle = async (id: number, data: T) => {
    loadingSingle.value = true;
    try {
      const response = await $fetch<T>(`/api/${resource}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      resourceSingle.value = response;
    } catch (error) {
      if (error instanceof Error) {
        errorSingle.value = error.message;
      } else {
        errorSingle.value = "An error occurred";
      }
    } finally {
      loadingSingle.value = false;
    }
  };

  const createSingle = async (data: T) => {
    loadingSingle.value = true;
    try {
      const response = await $fetch<T>(`/api/${resource}`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      resourceSingle.value = response;
    } catch (error) {
      if (error instanceof Error) {
        errorSingle.value = error.message;
      } else {
        errorSingle.value = "An error occurred";
      }
    } finally {
      loadingSingle.value = false;
    }
  };

  const deleteSingle = async (id: number) => {
    loadingSingle.value = true;
    try {
      await $fetch<T>(`/api/${resource}/${id}`, {
        method: "DELETE",
      });
      resourceSingle.value = null;
    } catch (error) {
      if (error instanceof Error) {
        errorSingle.value = error.message;
      } else {
        errorSingle.value = "An error occurred";
      }
    } finally {
      loadingSingle.value = false;
    }
  };

  return {
    resourceAll,
    resourceSingle,
    loadingAll,
    loadingSingle,
    errorAll,
    errorSingle,
    fetchAll,
    fetchSingle,
    editSingle,
    createSingle,
    deleteSingle,
  };
};
