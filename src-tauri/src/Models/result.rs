use anyhow;
use serde::Serialize;
use thiserror;

#[derive(Debug, thiserror::Error)]
pub enum TauriError {
    #[error(transparent)]
    SqliteError(#[from] diesel::result::Error),
}

impl Serialize for TauriError {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        serializer.serialize_str(&self.to_string().as_ref())
    }
}

pub type TauriResult<T, E = TauriError> = anyhow::Result<T, E>;
