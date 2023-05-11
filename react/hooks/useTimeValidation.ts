import { useState, useEffect } from "react";

export default function useTimeValidation(fechaInicio: string | undefined, fechaFinal: string | undefined) {

  //STATES
  const [fechaInicioFormatted, setFechaInicioFormatted] = useState<string>('');
  const [fechaFinalFormatted, setFechaFinalFormatted] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);

  //EFFECTS
  useEffect(() => {
    if(fechaInicio && fechaFinal) {
      setFechaInicioFormatted(fechaInicio.replace('DF', ' ~ '))
      setFechaFinalFormatted(fechaFinal.replace('DF', ' ~ '))

      const ahora = new Date();
      const fechaInicioInput = new Date(fechaInicio.replace('DF','T'));
      const fechaFinalInput = new Date(fechaFinal.replace('DF','T'));

      if(fechaInicioInput.getTime() < ahora.getTime() && fechaFinalInput.getTime() > ahora.getTime()) {
        setIsActive(true);
      }
    }
  },[fechaInicio,fechaFinal])

  return {
    fechaInicioFormatted,
    fechaFinalFormatted,
    isActive
  }
}

