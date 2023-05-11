import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { ModalDialog, Button, Input, Alert } from 'vtex.styleguide';
import useCategoryCardRegistroState from "../../../hooks/useCategoryCardRegistroState";
import './styles.css';

const CSS_HANDLES = [
  'cardRegistration__formContainer',
  'cardRegistration__dateContainer'
]

export default function CategoryCardRegistro({categoryName, categoryId, setRefetchData}: CategoryCardRegistroProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //CATEGORY REGISTRATION STATE
  const {
    state,
    openModal,
    closeModal,
    updateIconoCategoria,
    updateBanner,
    updateSlug,
    updateInitialDate,
    updateFinalDate,
    handleSubmit
  } = useCategoryCardRegistroState({categoryName, categoryId, setRefetchData});

  //JSX
  return(
    <div>
      <Button onClick={openModal}>
        Crear registro
      </Button>

      <ModalDialog
        centered
        loading={state.loadingFetch}
        isOpen={state.isModalOpen}
        onClose={closeModal}
        cancelation={{
          onClick: closeModal,
          label: 'Cancelar'
        }}
        confirmation={{
          onClick: handleSubmit,
          label: 'Guardar'
        }}
      >
        <div className={handles.cardRegistration__formContainer}>
          {/* NOMBRE CATEGORIA */}
          <Input
            value={state.nombreCategoria}
            label="Nombre categoría"
            disabled={true}
          />
          {/* ICONO CATEGORIA */}
          <Input
            value={state.iconoCategoria}
            label="Icono categoría"
            onChange={(e: any) => updateIconoCategoria(e.target.value)}
            errorMessage={state.iconoCategoriaError}
          />
          {/* BANNER */}
          <Input
            value={state.bannerDesktop}
            label="Url banner"
            onChange={(e: any) => updateBanner(e.target.value)}
            errorMessage={state.bannerDesktopError}
          />
          {/* SLUG */}
          <Input
            value={state.slug}
            label="Slug"
            onChange={(e: any) => updateSlug(e.target.value)}
            errorMessage={state.slugError}
          />
          <div className={handles.cardRegistration__dateContainer}>
            {/* FECHA Y HORA INICIO */}
            <label>
              Fecha y Hora de Inicio
              <input type="datetime-local" value={state.fechaInicio} onChange={(e: any) => updateInitialDate(e.target.value)}/>
              {
                state.fechaInicioError !== '' &&
                <p>Introduzca una fecha valida</p>
              }
            </label>
            {/* FECHA Y HORA FINAL */}
            <label>
              Fecha y Hora Final
              <input type="datetime-local" value={state.fechaFinal} onChange={(e: any) => updateFinalDate(e.target.value)}/>
              {
                state.fechaFinalError !== '' &&
                <p>Introduzca una fecha valida</p>
              }
            </label>
          </div>
        </div>

        {
          state.fetchSuccesfull &&
          <Alert type="success">
            Registro guardado exitosamente
          </Alert>
        }

        {
          state.fetchError &&
          <Alert type="error">
            Se ha producido un error, intentelo de nuevo.
          </Alert>
        }
      </ModalDialog>
    </div>
  )
}

