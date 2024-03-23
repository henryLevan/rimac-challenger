export const DOCUMENT_TYPES = [
    {
        type: 'DNI',
        value: 'DNI'
    },
    {
        type: 'CARNET-DE-EXTRANJERIA',
        value: 'Carnet de extranjería'
    },
    {
        type: 'PASSPORT',
        value: 'Pasaporte'
    }
]

export const ERRORS_MESSAGES = {
    errorDni: 'Por favor ingrese su número de DNI',
    errorCE: 'Por favor ingrese su numero de documento',
    errorPhone: 'Por favor ingrese su número de Celular',
    errorTaC: 'Es necesario aceptes los terminos y condiciones'
}

export const PLAN_TYPES_FOR_ME = 'PLAN_TYPES_FOR_ME'
export const PLAN_TYPES_FOR_SOMEONE = 'PLAN_TYPES_FOR_SOMEONE'

export const PLAN_TYPES = [
    {
        icon: 'images/steps-images/IcProtectionLight.svg',
        title: 'Para mí',
        description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
        isSelected: false,
        type: PLAN_TYPES_FOR_ME
    },
    {
        icon: 'images/steps-images/IcAddUserLight.svg',
        title: 'Para alguien más',
        description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
        isSelected: false,
        type: PLAN_TYPES_FOR_SOMEONE
    }
]
